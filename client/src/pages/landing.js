import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt='jobify' className='logo' />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby vexillologist lomo blog skateboard forage hoodie tonx, leggings church-key health goth small batch master cleanse. Artisan church-key sriracha, vaporware yr hoodie everyday carry. XOXO taiyaki letterpress chia occupy, enamel pin activated charcoal food truck blue bottle cornhole gluten-free keffiyeh messenger bag drinking vinegar af. Tote bag snackwave literally vegan praxis forage bitters activated charcoal.
                    </p>
                    <button className='btn btn-hero'>Login/Register

                    </button>

                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    )
}

// const Wrapper = styled.main`
// nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;    
// }

// .page{
//     min-height: calc(100vh - var(--nav-height));
//     display: grid;
//     align-items: center;
//     margin-top: -3rem;
// }
// h1{
//     font-weight: 700;
//     span{
//         color: var(--primary-500); 

//     }
// }
//     p {
// color: var(--gray-600);
// }
// .main-img {
//     display: none;
// }    
// @media (min-width: 992px) {
//     .page {
//         grid-template-columns: 1fr 1fr;
//         column-gap: 3rem;
//     }
//     .main-img {
//         display:block;
//     }
// }
// `

export default Landing
