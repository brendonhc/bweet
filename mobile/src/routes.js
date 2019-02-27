import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import Login from './pages/Login'
import Timeline from './pages/Timeline'


// Basicamente uma função que deve ser colocada por baixo de todas as rotas da aplicação
const Routes = createAppContainer(
    // SwitchNavigator -> Navegação sem efeitos e sem retorno
    createSwitchNavigator({
        Login,
        App: createStackNavigator({
            Timeline,
        })
    })

);

export default Routes