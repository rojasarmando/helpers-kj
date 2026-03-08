/**
 * Generates a random number within a range (inclusive).
 * @param min Lower limit
 * @param max Upper limit
 */
export const randomNumber = (min: number, max: number): number => {
    if (min > max) [min, max] = [max, min];
    const possibilities = max - min + 1;
    return Math.floor(Math.random() * possibilities) + min;
};

/**
 * Gets the local time in HH:MM:SSam/pm format.
 * @param date The date object to format (defaults to now).
 * @returns Formatted time string.
 */
export const getLocalTime = (date: Date = new Date()): string => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const period = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 hours should be 12
    const hoursStr = hours.toString().padStart(2, '0');

    return `${hoursStr}:${minutes}:${seconds}${period}`;
};

/**
 * Common regular expressions (formats for allow-lists).
 */
export const Regex = {
    onlyLettersNumbers: () => "0-9A-ZÑa-zñ",
    onlyNumbers: () => "0-9",
    onlyLetters: () => "A-ZÑa-zñ\\s",
    onlyLetters2: () => "A-ZÑa-zñ\\s\\.",
    onlyPasswords: () => "0-9A-ZÑa-zñ\\.\\$_\\-@",
};

/**
 * Helper for simplified AJAX using fetch.
 */
export const ajax = async <T = any>(
    url: string,
    onComplete: (resp: T) => void,
    payload: any = {},
    method: 'GET' | 'POST' = 'POST'
): Promise<void> => {
    try {
        const options: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (method === 'POST') {
            options.body = JSON.stringify(payload);
        }

        const response = await fetch(url, options);

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        onComplete(data);
    } catch (error) {
        console.error('AJAX Error:', error);
        // Error feedback callback if extended
        if (typeof (window as any).imageModal === 'function') {
            (window as any).imageModal((window as any).errorMessage);
        }
    }
};
