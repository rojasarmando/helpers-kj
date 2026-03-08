import { randomNumber, Regex } from './utils';

/**
 * Interface representing a HelpersKJ library instance.
 */
export interface IHelpersKJ {
    shadow(color?: string | boolean): this;
    disabled(value: boolean): this;
    visibility(val: boolean): this;
    noCopy(): this;
    uppercase(): this;
    validateField(allowedChars: string): this;
    maxLength(value: number): this;
    emptyField(errorSelector: string): this;
    length(errorSelector: string, minLength: number): this;
    compare(otherSelector: string, errorSelector: string): this;
    stripSpace(): this;
    securePassword(errorSelector: string): this;
    route(url: string): this;
    clear(nodeSelector: string): this;
    test(): void;
}

/**
 * Main class handling DOM elements.
 */
export class HelpersKJ implements IHelpersKJ {
    private elements: HTMLElement[];

    constructor(selector: string | HTMLElement | HTMLElement[] | NodeList) {
        if (typeof selector === 'string') {
            this.elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
        } else if (selector instanceof HTMLElement) {
            this.elements = [selector];
        } else if (selector instanceof NodeList) {
            this.elements = Array.from(selector) as HTMLElement[];
        } else if (Array.isArray(selector)) {
            this.elements = selector.filter(el => el instanceof HTMLElement) as HTMLElement[];
        } else {
            this.elements = [];
        }
    }

    /**
     * Executes an action on each selected element.
     */
    private each(callback: (el: HTMLElement) => void): this {
        this.elements.forEach(callback);
        return this;
    }

    /**
     * Applies a box-shadow effect to the element.
     */
    shadow(color: string | boolean = "white"): this {
        return this.each((el) => {
            if (color === false || color === "none") {
                el.style.boxShadow = "none";
            } else {
                const shadowColor = typeof color === 'string' ? color : "white";
                el.style.boxShadow = `.1em .1em 1em ${shadowColor}`;
            }
        });
    }

    /**
     * Enables or disables the elements.
     */
    disabled(value: boolean): this {
        return this.each((el) => {
            if ('disabled' in el) {
                (el as HTMLButtonElement | HTMLInputElement).disabled = value;
            }
        });
    }

    /**
     * Sets the visibility (display: block/none).
     */
    visibility(val: boolean): this {
        return this.each((el) => {
            el.style.display = val ? 'block' : 'none';
        });
    }

    /**
     * Prevents cut, copy, and paste actions.
     */
    noCopy(): this {
        const handler = (e: Event) => e.preventDefault();
        return this.each((el) => {
            el.addEventListener('cut', handler);
            el.addEventListener('copy', handler);
            el.addEventListener('paste', handler);
        });
    }

    /**
     * Automatically converts the input value to uppercase while typing.
     */
    uppercase(): this {
        return this.each((el) => {
            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                el.addEventListener('input', () => {
                    const start = el.selectionStart;
                    const end = el.selectionEnd;
                    el.value = el.value.toUpperCase();
                    el.setSelectionRange(start, end);
                });
            }
        });
    }

    /**
     * Validates that only allowed characters are entered.
     */
    validateField(allowedChars: string): this {
        return this.each((el) => {
            el.addEventListener('keypress', (e: KeyboardEvent) => {
                const char = e.key;
                // Allow control keys
                if (e.ctrlKey || e.altKey || e.metaKey || char.length > 1) return;

                const isAllowed = allowedChars.includes(char) || allowedChars.includes(char.toLowerCase()) || allowedChars.includes(char.toUpperCase());

                if (!isAllowed) {
                    e.preventDefault();
                }
            });
        });
    }

    /**
     * Sets the maxlength attribute.
     */
    maxLength(value: number): this {
        return this.each((el) => {
            el.setAttribute('maxlength', value.toString());
        });
    }

    /**
     * Validates if the field is empty and displays an error message.
     */
    emptyField(errorSelector: string): this {
        const errorEl = document.querySelector(errorSelector);
        return this.each((el) => {
            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                if (el.value.trim() === "") {
                    this.shadow("red");
                    if (errorEl) errorEl.innerHTML = "Empty Field";
                    (window as any).control = -1;
                } else {
                    this.shadow(false);
                    if (errorEl) errorEl.innerHTML = "";
                }
            }
        });
    }

    /**
     * Validates the minimum length of the text.
     */
    length(errorSelector: string, minLength: number): this {
        const errorEl = document.querySelector(errorSelector);
        return this.each((el) => {
            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                if (el.value.trim().length < minLength) {
                    this.shadow("red");
                    if (errorEl) errorEl.innerHTML = `Needs at least ${minLength} characters`;
                    (window as any).control = -1;
                } else {
                    this.shadow(false);
                    if (errorEl) errorEl.innerHTML = "";
                }
            }
        });
    }

    /**
     * Compares the current value with another element.
     */
    compare(otherSelector: string, errorSelector: string): this {
        const otherEl = document.querySelector(otherSelector) as HTMLInputElement | HTMLTextAreaElement;
        const errorEl = document.querySelector(errorSelector);
        return this.each((el) => {
            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                if (el.value !== (otherEl?.value || "")) {
                    this.shadow("red");
                    if (errorEl) errorEl.innerHTML = 'Does not match the previous field';
                    (window as any).control = -1;
                } else {
                    this.shadow(false);
                    if (errorEl) errorEl.innerHTML = "";
                }
            }
        });
    }

    /**
     * Removes whitespace from the beginning and end.
     */
    stripSpace(): this {
        return this.each((el) => {
            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                el.value = el.value.trim();
            }
        });
    }

    /**
     * Validates a secure password (at least one uppercase, one lowercase, and one number).
     */
    securePassword(errorSelector: string): this {
        const errorEl = document.querySelector(errorSelector);
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        return this.each((el) => {
            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                if (!regex.test(el.value)) {
                    this.shadow("red");
                    if (errorEl) errorEl.innerHTML = 'Not a secure password';
                    (window as any).control = -1;
                } else {
                    this.shadow(false);
                    if (errorEl) errorEl.innerHTML = "";
                }
            }
        });
    }

    /**
     * Redirects when clicked.
     */
    route(url: string): this {
        return this.each((el) => {
            el.addEventListener('click', () => {
                window.location.href = url;
            });
        });
    }

    /**
     * Clears the content of a node when clicked.
     */
    clear(nodeSelector: string): this {
        const node = document.querySelector(nodeSelector);
        return this.each((el) => {
            el.addEventListener('click', () => {
                if (node) node.innerHTML = "";
            });
        });
    }

    /**
     * Test function.
     */
    test(): void {
        alert("Hello Armandito <3");
    }
}

/**
 * Factory function to initialize HelpersKJ.
 */
export const kj = (selector: string | HTMLElement | HTMLElement[] | NodeList) => new HelpersKJ(selector);
