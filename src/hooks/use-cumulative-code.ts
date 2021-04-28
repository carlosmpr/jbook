import {useTypedSelector} from './usetyped-slector'

export const useCumulativeCode = (CellId: String) =>{
 return useTypedSelector((state)=> {
        const {data, order } =state.cells;
        const orderedCells = order.map(id=> data[id])
        const showFunc = `var show = (value) => {
          const root = document.querySelector('#root');
          if(typeof value === 'object' )
          {
            if(value.$$typeof && value.props){
              ReactDOM.render(value, root)
            }else{
              root.innerHTML = JSON.stringify(value)
            }
            
          }else{
            root.innerHTML =value
          }
          
        }
        `;
    
        const showFuncNoop = 'var show =() =>{}';
        const cumulativeCode=[]
        for(let c of orderedCells){
          if(c.type ==='code'){
            if(c.id === CellId){
              cumulativeCode.push(showFunc)
            }else{
              cumulativeCode.push(showFuncNoop)
            }
            cumulativeCode.push(c.content)
          }
          if(c.id === CellId){
            break;
          }
        }
        return cumulativeCode;
      }).join('\n');

}