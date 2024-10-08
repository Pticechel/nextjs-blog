import React from 'react';
import {cn} from "@/lib/utils";

interface  Props {
    className?: string;
}


export const Container:React.FC<React.PropsWithChildren<Props>> = ({className,children}) => {
    return (
        <header>
            <div className={cn('mx-auto max-w-[1440px]',className)}>{children}</div>
        </header>
    );
};
