import React from 'react'
import { useContext } from 'react';

// Data to Text Component
// APP => Content => Block => Text

const DataContext = React.createContext();

const ProviderPattern = () => {
    const data = { title: "Provider Pattern", text: "Example for Provider Pattern" }
    return (
        <div>
            <DataContext.Provider value={data}>
                <SideBar data={data} />
                <Content data={data} />
            </DataContext.Provider>
        </div>
    )
}

const SideBar = ({ data }) => <List data={data} />
const List = ({ data }) => <ListItem data={data} />
// const ListItem = ({ data }) => <span>{data.listItem}</span>
const ListItem = ()=>{
    const data = useContext(DataContext);
    return (
        <span>{data.listItem}</span>
    )
}

const Content = ({ data }) => (
    <div>
        <Header data={data} />
        <Block data={data} />
    </div>
)
// const Header = ({ data }) => <div>{data.title}</div>
const Header = ()=>{
    const data = useContext(DataContext);
    return (
        <div>{data.title}</div>
    )
} 
// Same Goes for Below
const Block = ({ data }) => <Text data={data} />
const Text = ({ data }) => <h1>{data.text}</h1>


export default ProviderPattern