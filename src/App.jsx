import './App.css'
import { Btn } from './assets/components/Btn'
import { Menu } from './assets/components/Menu'

export default function App() {
  return (
    <>
    <Menu s1 = 'batata' s2 = 'carambola' s3 = 'morango'/>
      <main className='Menu'>
        <section id='s1'>
          Primeira
          <Btn text='batata' func="#s2"/>
          </section>
        <section id='s2'
        >Segunda
        <Btn text='batata' func="#s3"/>
        </section>
        <section id='s3'>
          Terceira
          <Btn text='batata' func="#s1"/>
          </section>
      </main>
    </>
  )
}