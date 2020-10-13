var today = new Date();
var year = today.getFullYear()

const Footer = () => {

    return(
    <div className="footer">
        <div className="container container-fluid mt-5">
            <ul className="mt-5 pt-5 pl-0 links">
                <li><a href="#">About</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="">Safety Measures</a></li>
                <li><a>Contact</a></li>
                <li><a>Sitemap</a></li>
                <br/>
                <div class="mr-auto">
                <a href="https://www.instagram.com/flipbooks.official/" target="_blank" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAChElEQVRYR+2YPW4UQRCF3zsBnADsgBgcEWICS4QmJQFOAJyAnwtgUhLbESEmhARISbBPgLmBfYJCn9SNZme6d3Z6R2iRXJIlr93d8+a9qlfVa21YeMPw6ArQmCIrMxQRdyRdk7Q7dmjv/98kXdo+XWXfUkARcV3SM0lPJG2tcuCSNeeSjiS9s31RW1cFlMB8lQQzcwZM3a+BKgIqgDmWdGL7ZCqydBYyP5d0L+2vgqoBeiXpZdr81DZUrx0R0T33tW0+L0QNEHrflHRsm/xpjojgZW5JemP7c0SQ5DB1bnt7FFCqpp9pIVpzQFNEBC9zmDb/sH2397edfvUNGIoI9CaZZXss6R9L2k+JT+XALHkGsxcRsSfpSwL0wfajiKBaf9VeuATor841QAn0R0nYQikA9xB2I+KBpBu23+eFERHp90EeLQN0ZntQ8l0G06FnkrKssHu7g7AoeSug77YXXDmVMHTDzCWG2beCiEBCEhlXh6ntvufMCQgveZsYQJKiLyVQSEq8sH3Q1XVOQLlki3L2Hor5IV+J6aYcKh2EBEhBP4KtaiT/oQoHfjMnQy2AftteaMxzAsqSndreGWHon0i2cUlNuePGuaRpvAuVliqMdpGtYWuusi82v4IxIk3XGLtmOuhVyNyaQ9VelkDBDEyVAtPcrzXmqYCmNFe6Oc6cqyg316PaRNjSXKF8lvGjRN3k8SNpPNuA1gfVGdC4iQymhf9mhAU5lZNHCbo3Q/6nZWZYkYizGFnxsDw9MLLslvJsbCLsgpqKpbYeMFQgaTGIVS6KvBnVxNC/TmAFjCEHTRfFQjJSffxMvcHCBL1v/av0OnS07l35y4bWB0zddwVojLE/W0SSND+su5kAAAAASUVORK5CYII="/></a>
                <a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADCklEQVRYR+2X4XEUMQyF9SqAVECogKQCSAWECiAVECoAKoBUQFIBoQKSCkgq4FIBoQIx34684/V51+sJP+5HNHNzc7e29vlJepJlO2baMTz2CKgVkQcx5O6vzOyJmR3Ei27M7F7SdevFc8+7AQWIt2Z2bGZPF158aWaXki56wK0G5O77ZvbNzGCltMTIy8qzKzP7LInvpq0C5O7vzOxLxggAzs3sStImf4u7wxrs8XmdPTuVdNZC1AQUYGAGuzMzHBOOpkV4v5rZi1h8LulkaeMiIHfnlN/DwS3hknTfRJItCMYARd5hHyTxu2qzgCJnfkWYbiWlSurBM651d0KcQB3N5dQSoOSAMB0kZuLEhOCuzJ8lpLGPxGbvjaTD2voqoIj9z9hwIglwFk75H7ZI6KMeuub85j7mABHj98EC5T6Yu38ys4+Zg0NJiOFqc3cKgur7IYkcndgcIEr5WZmA7g7ludZcSEISVltRKHtlkWwBcnfCQTJjEwYqgKqnXJFLf2LNVnLXAKHEQ/5Imjx399MQSB7/NbP9XhmI0FcjMLyzPE1OaQUQKowzGirfMNilSwEohZ6WQl6O1gUonOVi2VTeWviy0K8CNBuy5LwQuS1QUd5oTZU9d08hGyUl+a4xRJn/riV1ftoCFCHA+SbrfYChxGFhbMChZeuTOsKCM/Jkse8UoNgKMKo0n5MY2PYydpGJ1KzbZR+AkjBuJD1vlHFeebWlE2nI8qdLGPOwbcW5Upmsp1pIeJhNRh88TmpetI43tTFmqbnSEmiE15JqU2KVuJANwga7Qw8M1glj6oOzPtcAOpNEWB5kWQ/DT9/40aqEHmThiyROjXQxBeaa61gJSa0j/jRWQrHqJhF7AJMmhibbc4DScIZ+8ClziP+oRHJhMn7EpMl4waHyKbNZHDDfGj/K6FA1jCWlJeEbZ6dsATcULgar5qbW+AEAxG74hBLDFqcvSzwHySSAStNWVt3H0ua58QOquXVO7lwV/UmqDEjUfWChF0Tut3kv66mo/7H2EVCLxZ1j6B8ebHE0VW8seAAAAABJRU5ErkJggg=="/></a>
                </div>
            </ul>
            <div className="container credits pl-0">
                Copyright &copy; {year} Flipbooks
                <br></br>
                Made with &#x2764;  <a href="https://shashankbhat.vercel.app/" target="_blank" className="dev">Bhat</a>
            </div>
         
        </div>
    </div>
    )
}

export default Footer;