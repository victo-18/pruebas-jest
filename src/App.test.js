import { render, screen ,fireEvent} from "@testing-library/react";
//import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { Index } from "./page/Index";
import Informacion from "./component/Informacion";
let article;
let button;
afterEach(() => {
  render(<Informacion />);
  article = screen.getByRole("article", { name: "parrafo principal" });
  button =screen.getByRole('button',{name:'Cambia-color'})
});
test("visibilizar texto", () => {
  render(<Index />);
  const articulo = screen.getByRole("article", { name: "parrafo principal" });
  expect(articulo).toBeInTheDocument();
});
test("validar clases", () => {
  expect(article).toHaveClass("article");
});

test("visualizar titulo", () => {
  expect(article).toHaveTextContent("Create React App");
});
test("visualizar imagenes", () => {
  expect(article).toBeVisible("jQery");
});

test("si al pulsar boton cabia color",()=>{
  fireEvent.click(button);
  expect(article).toHaveStyle('backgroundColor:black')
})
