// Javascript async in asynchronous the javascript code execute line by line and by defaulot the langauge is synchronous
// syngle thread language means on each thread it execute complete
// in Javascript the code execute line by line, when the old statement didn't execute it will not move on new statement-...
// because of one thread.


//for rect if we work on web we use react-dom and if we are working on app we use react-native
// if we execute node directly in our system then we use npx otherwise npm
// when we create component in react wither we create it from react or vite we should capitalized the components name
// BEST PRACTICES capital first word
//React controll the UI updates

//The hydration concept is we create full layout e:g button and navbar input fields but it doesn't work untill we 
inject javascript in it the process called hydration.

// for creating a react project on vite: npm create vite@latest
// for creating a react project : npx create-react-app
//Routes and reusable components

//REACT QUESTION FOR INTERVIEW PURPOSE
if we are creating an small project counter on click and we are using this:

const function = () => {
    const [counter, setCounter] = useState(0)

    const addValue =()=>{
        setCounter =(counter + 1)
        setCounter =(counter + 1)
        setCounter =(counter + 1)
        setCounter =(counter + 1)
    }
    return(
        <div>
        <h1>ABC</h1>
        </div>
    )
}
it just increase one value on a Click.

but if we use this method:
const function = () => {
    const [counter, setCounter] = useState(0)

    const addValue =()=>{
        setCounter =(prevCounter => prevCounter + 1)
        setCounter =(prevCounter => prevCounter + 1)
        setCounter =(prevCounter => prevCounter + 1)
        setCounter =(prevCounter => prevCounter + 1)
    }
    return(
        <div>
        <h1>ABC</h1>
        </div>
    )
}
so it add 4 directly on one click

//when we code in core react then we can write window directly because of SSR and CSR
//Remember the key in loops in react

//whem we sue <a> tag instead of link the complete page will refresh so, we use link tag
//

routing methods:
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
])

//this one we can also use

const router = useBrowserRouter(
    createRoutesFromElement(
        <Route path ='/' element ={<Layout/>}>
        <Route path = '' element ={<Home/>}/>
        </Route?>

    )
)

//for creating a context in RTX first use React.createContext()

