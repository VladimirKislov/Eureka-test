import React from 'react';
import style from './layout.css';

interface ILayoutPrors {
    children?: React.ReactNode;
}

export function Layout ({ children }: ILayoutPrors) {
    return (
        <div className={style.layout}>
            { children }
        </div>
    )
}