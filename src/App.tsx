import React from 'react';
import { Navbar } from './components/Navbar';
import { Layout } from 'antd';
import { useRoutes } from './Routes';
import { BrowserRouter} from 'react-router-dom';

const { Header, Footer, Content } = Layout;

function App() {

  const routes = useRoutes();

  return (
    <BrowserRouter>
      <Layout style={{minHeight:"100vh"}}>
        <Header style={{maxHeight:200, height: "auto"}}>
          <Navbar />
        </Header>
        <Content style={{padding: 60}}>
            {routes}
        </Content>
        <Footer style={{textAlign: "center"}}>Wiki City ©2022 Created by Roman Usaty</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
