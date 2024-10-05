import React from 'react';
import {cn} from "@/lib/utils";
import {Container} from './container'
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui";

interface  Props {
    className?: string;
}


export const Header:React.FC<Props> = ({className}) => {
    return (
        <header>
            <div className={cn('border border-b text-center', className)}>
                <div className={cn('border border-b')}>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09 <Link href='./'>Обратный звонок</Link></div>
                <Container className='flex items-center justify-between py-8'>


                    {/* left side*/}


                    <div>
                        <Image src='/logo' alt="Logo" width={50} height={50}/>
                        <h1 className="text-2xl uppercase font-black">shop</h1>
                    </div>

                    {/* right side */}

                    <div className='flex items-center gap-3'>
                        <Button variant='outline'></Button>
                        <Button></Button>
                    </div>
                </Container>
            </div>
        </header>
    );
};

