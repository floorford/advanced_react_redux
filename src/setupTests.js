import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// documentation @ airbnb.io

// name of file important!

// jest looks for this file in the src dir
// automatically executes it first

Enzyme.configure({ adapter: new Adapter() });

// now we can use enzyme in any of our test files

// enzyme API:
// static = render given comp and return plain HTML
// shallow =  render just comp and none of its REACT children
// full DOM = render comp + all its children, let us modify it afterwards
