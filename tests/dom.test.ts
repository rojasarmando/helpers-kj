import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { kj } from '../src/dom';

describe('DOM Helpers', () => {
    let dom: JSDOM;
    let document: Document;

    beforeEach(() => {
        dom = new JSDOM('<!DOCTYPE html><html><body><div id="test"></div><input id="input" type="text" /><span id="error"></span></body></html>');
        document = dom.window.document;
        global.document = document;
        global.window = dom.window as any;
        global.HTMLElement = dom.window.HTMLElement;
        global.HTMLInputElement = dom.window.HTMLInputElement;
        global.HTMLTextAreaElement = dom.window.HTMLTextAreaElement;
        global.NodeList = dom.window.NodeList;
    });

    it('should apply shadow', () => {
        const el = document.getElementById('test')!;
        kj(el).shadow('blue');
        expect(el.style.boxShadow).toContain('blue');
    });

    it('should apply visibility', () => {
        const el = document.getElementById('test')!;
        kj(el).visibility(false);
        expect(el.style.display).toBe('none');
        kj(el).visibility(true);
        expect(el.style.display).toBe('block');
    });

    it('should disable elements', () => {
        const input = document.getElementById('input') as HTMLInputElement;
        kj(input).disabled(true);
        expect(input.disabled).toBe(true);
    });

    it('should validate emptyField', () => {
        const input = document.getElementById('input') as HTMLInputElement;
        const error = document.getElementById('error')!;
        input.value = "";
        kj(input).emptyField('#error');
        expect(error.innerHTML).toBe('Empty Field');
        expect(input.style.boxShadow).toContain('red');

        input.value = "test";
        kj(input).emptyField('#error');
        expect(error.innerHTML).toBe('');
        expect(input.style.boxShadow).toBe('none');
    });

    it('should validate securePassword', () => {
        const input = document.getElementById('input') as HTMLInputElement;
        const error = document.getElementById('error')!;

        // Insecure
        input.value = "123";
        kj(input).securePassword('#error');
        expect(error.innerHTML).toBe('Not a secure password');

        // Secure
        input.value = "Secure123";
        kj(input).securePassword('#error');
        expect(error.innerHTML).toBe('');
    });
});
