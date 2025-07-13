import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewProducts = () => {
    const [pdata, xpdata] = useState(
        [
            { "pname": "Kindle Paperwhite", "description": "Waterproof e-reader with 8GB storage and glare-free screen. Price: ₹10,499", "img": "https://in.static.webuy.com/product_images/Electronics/eReaders/SAMAPAPSE202132GBC_l.jpg" },
            { "pname": "Noise ColorFit Pro 3", "description": "Fitness smartwatch with SpO2 monitoring and 1.55\" display. Price: ₹3,999", "img": "https://m.media-amazon.com/images/I/61IYppaanVL.jpg" },
            { "pname": "boAt Rockerz 450", "description": "Wireless headphones with deep bass and 15H battery life. Price: ₹1,299", "img": "https://m.media-amazon.com/images/I/51FNnHjzhQL.jpg" },
            { "pname": "Logitech MX Master 3", "description": "Ergonomic wireless mouse with fast scrolling. Price: ₹7,995", "img": "https://m.media-amazon.com/images/I/61ni3t1ryQL._SL1500_.jpg" },
            { "pname": "HP USB-C Hub", "description": "Multiport adapter with HDMI, USB 3.0, SD card reader. Price: ₹2,199", "img": "https://m.media-amazon.com/images/I/61ecru3tIKL._UF1000,1000_QL80_.jpg" },
            { "pname": "Amazon Echo Dot (5th Gen)", "description": "Smart speaker with Alexa and better bass. Price: ₹4,999", "img": "https://m.media-amazon.com/images/I/61NIsUGl+FL._SL1500_.jpg" },
            { "pname": "Sony SRS-XB13", "description": "Portable Bluetooth speaker with extra bass. Price: ₹3,299", "img": "https://m.media-amazon.com/images/I/61xrGh43RSS.jpg" },
            { "pname": "Mi Power Bank", "description": "Dual output fast charging slim power bank. Price: ₹1,199", "img": "https://m.media-amazon.com/images/I/71Rcb9pnbEL.jpg" },
            { "pname": "SanDisk 128GB Pendrive", "description": "High-speed USB 3.0 with secure file encryption. Price: ₹749", "img": "https://oxygendigitalshop.com/media/cache/2500x0/catalog/product/c/r/cruzer-blade-usb-2-0-angle.png.wdthumb.1280.1280_1632390080.webp" },
            { "pname": "Zebronics Webcam ZEB-Crystal", "description": "HD webcam with mic and clip-on stand. Price: ₹999", "img": "https://zebronics.com/cdn/shop/products/Zeb-Crystal-Clear-pic1.jpg?v=1624962307" }

        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {pdata.map(
                                (value, index) => {
                                    return (
                                        <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                            <div class="card h-100">
                                                <img src={value.img} class="card-img-top" alt="..." height={400} width={100}></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.pname}</h5>
                                                    <p class="card-text flex-grow-1">{value.description}</p>
                                                    <a href="#" class="btn btn-primary mt-auto">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                            )

                            }


                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewProducts