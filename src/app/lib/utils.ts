// Common utility functions
export function classNames(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US').format(date);
}