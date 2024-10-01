import React from 'react';
import {cn} from "@/lib/utils";
import {Container} from './container'
import Image from "next/image";

interface  Props {
    className?: string;
}


export const Header:React.FC<Props> = ({className}) => {
    return (
        <header>
            <div className={cn('border border-b',className)}>
                <Container className='flex items-center justify-between py-8'>

                    <div></div>
                    {/* left side*/}

                    <Image src="./logo" alt="Logo" width={50} height={50}/>
                    <div></div>
                </Container>
            </div>
        </header>
    );
};

