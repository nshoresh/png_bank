/*
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const loggedIn = {
    firstName: "Adrian",
    lastName: "JSM",
    $id: "123",
    email: "adrian@example.com",
    userId: "u123",
    dwollaCustomerUrl: "https://dwolla.com/customer"
  };

  return (
    <main className="flex h-screen w-full font-inter overflow-hidden">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="flex items-center justify-between p-4">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" priority />
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}
*/
import MobileNav from "@/components/MobileNav";
//import { Image } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Image from 'next/image'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {$id: '78908', email: 'xmly@gamil.com',userId: '678999',
    dwollaCustomerUrl: 'link',dwollaCustomerId: 'Cus3455',
     firstName: 'Adrian', lastName:'JSM', 
     address1:'P.O Box 4566 NCD Port Moresby', 
     city:'Moresby',state:'South', postalCode:'121', 
     dateOfBirth:'1997/11/15', ssn:'tyu' };
  
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn}/>

    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg"
        width={30} height={30}
         alt="logo"
         />
          <div>
            <MobileNav user ={loggedIn}/>
          </div>
      </div>
      {children}
    </div>      
   </main>
  );
}
