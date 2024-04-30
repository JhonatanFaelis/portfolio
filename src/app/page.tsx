"use client";
import Hero from "@/Components/Hero/Hero";
import MobileNav from "@/Components/MobileNav/MobileNav"
import Nav from "@/Components/Nav/Nav"
import { useState } from "react";


const Index = () => {

  const [nav, setNav] = useState(false)

  const openNav = () => setNav(true);

  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
      </div>
        <Hero />
    </div>

  )
}

export default Index