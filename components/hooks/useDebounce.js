import React, {useCallback} from "react";

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

export const useDebounce = (func, timeout) => {
    return useCallback(debounce(func, timeout), []);
}