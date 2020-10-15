var today = new Date();
var year = today.getFullYear()

const Footer = () => {

    return(
    <div className="footer">
        <div className="container container-fluid mt-5">
            <ul className="mt-5 pt-5 pl-0 links">
                <li><a href="/about">About</a></li>
                <li><a href="static/tc.pdf">Terms & Conditions</a></li>
                <li><a href="static/safe.pdf">Safety Measures</a></li>
                <li><a href="static/sitemap.xml">Sitemap</a></li>
                <br/>
                <div class="mr-auto">
                <a href="https://www.instagram.com/flipbooks.official/" rel="noreferrer noopener" target="_blank" ><box-icon name='instagram' type='logo' size="md" color='#ffffff'></box-icon></a>
                <a href="https://wa.me/message/MUR7NZNPZANQC1" rel="noreferrer noopener" target="_blank"><box-icon name='whatsapp' type='logo' animation='tada'  size="md" color='#ffffff' ></box-icon></a>
                </div>
            </ul>
            <div className="container credits pl-0">
                Copyright &copy; {year} Flipbooks
                <br></br>
                Made with &#x2764; by <a href="https://shashankbhat.vercel.app/" target="_blank" className="dev">Bhat</a>
            </div>
         
        </div>
    </div>
    )
}

export default Footer;