import React ,{useState} from 'react'; 
import ReactDOM from 'react-dom'; 
import styled from 'styled-components'; 
import { useTable } from 'react-table';
import './index.css';





const Table = ({ columns, data }) => {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text} </button>


const App = () => {
     
    /* const [good, setGood] = useState(3)
    const [neutral, setNeutral] = useState(3)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0) */
    /* const [feedback, setFeedback] = useState({good:0, neutral:0,bad:0,
        average: () => this.good + this.neutral + this.bad ,
        positive:0}) */
    const obj = {
        good: 0,
        neutral:0,
        bad:0,    
        average: 0,
        positive: 0
    }
     
    const [data, setData] = useState([{...obj}])
    const [all, setAll] = useState(data[0].good)
    
    
    
    const average = (all) => {
       return (all/3).toFixed(1) * 10 /10
   } 
    const positive = (stat, all) => {
       if (all > 0) {
           return  ((stat/all) * 100).toFixed(2) * 10 /10
       }
   }
     
   data[0].average = average(all)
   data[0].positive = (data[0].good > 0) ? positive(data[0].good, all) + '%': 0 



   
    const handleGoodClick = () => {
        setData([{...data[0], good:data[0].good + 1}])
        setAll(all + 1)
    }
    const handleNeutralClick = () => {
        setData([{ ...data[0], neutral:data[0].neutral + 1 }])
        setAll(all + 1)
    }
    const handleBadClick = () => {
        setData([{ ...data[0], bad:data[0].bad +1 }])
        setAll(all + 1)
    }
    
   

   
    
    
    const columns = React.useMemo(
        () => [
            {
                Header: 'Statistics',
                columns: [
                    {
                        Header: 'Good',
                        accessor: 'good',
                    },
                    {
                        Header: 'Neutral',
                        accessor: 'neutral',
                    },
                    {
                        Header: 'Bad',
                        accessor: 'bad',
                    },
                    {
                        Header: 'Average',
                        accessor: 'average',
                    },
                    {
                        Header: 'Positive',
                        accessor: 'positive',
                    },

                ],
            },
            
        ],
        []
    )
   
    
    //const datam = React.useMemo()
    //const [originalData] = React.useState(data)

    /* const data = React.useMemo(
        
        () => [
            {
                good: obj.good,
                neutral: obj.neutral,
                bad: obj.bad,
                
            },
            {
                col1: 'react-table',
                col2: 'rocks',
                age: 23,
            },
            {
                col1: 'whatever',
                col2: 'you want',
                age: 23,
            },
        ],
        []
    ) */
   
    return (
        <>
        <h1>React Table example </h1>
            <Button handleClick={handleGoodClick} text='Good' />
            <Button handleClick={handleNeutralClick} text='Neurtal' />
            <Button handleClick={handleBadClick} text='Bad' />
           <p> Good : {data[0].good} Neurtal: {data[0].neutral} Bad:  {data[0].bad} all = {all}</p>
           <p> Average = {data[0].average}  Positive = {data[0].positive}</p>
            
       
            <Table columns={columns} data={data} />
      
            
        </>
    )
}


ReactDOM.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)