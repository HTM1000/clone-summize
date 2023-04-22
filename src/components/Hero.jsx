import { logo } from "../assets";

export default function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/HTM1000/clone-summize.git", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Resumo de artigos com <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplifique sua leitura com o Summize, um resumidor de artigos de código aberto que transforma artigos longos em resumos claros e concisos
      </h2>
    </header>
  );
}
