import { kj, HelpersKJ } from './dom';
import * as utils from './utils';

// Individual exports
export { kj, HelpersKJ };
export * from './utils';

// Global export for CDN support (unpack)
if (typeof window !== 'undefined') {
    (window as any).kj = kj;
    (window as any).HelpersKJ = HelpersKJ;
    (window as any).HelpersKJUtils = utils;
}
