import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            height: '100vh'
        },
    },
    paper: {
        margin: theme.spacing(1),
        padding: '2rem'
    },
    table: {
        minWidth: '650px',
        borderRadius: 1
    },
    tableContainer: {
        
    },
    alphabetRoot: {
        padding: '1rem 0'
    }
}));

function App() {
    const classes = useStyles();
    const [searchText, setSearchText] = useState(null);
    const [idioms, setIdioms] = useState([]);
    const [allIdioms, setAllIdioms] = useState([]);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        fetch('https://localhost:44380/api/idiom/GetIdioms', {
            method: 'GET',
            headers: { "content-type": "application/json" }
        }).then(res => res.json())
            .then(data => { setIdioms(data); })
            .catch((error) => {
                alert(error)
            })
    }, [])

    useEffect(() => {
        if (idioms && idioms.length > 0) {
            console.log('Idioms', idioms);
        }
    }, [idioms]);

    const handleSearchChange = () => {

    }

    const handleChange = (e) => { setChecked(!checked) }

    const AlphabetButtons = () => {
        let buttons = [];
        const FirstLetterKeyCode = 97;
        const LastLetterKeyCode = 122;

        for (let i = FirstLetterKeyCode; i <= LastLetterKeyCode; i++) {
            buttons.push(String.fromCharCode(i));
        }

        return (
            <div className={classes.alphabetRoot}>
                {buttons.map((button, index) => {
                    return (<Button key={'button'+ index}>{button}</Button>);
                })}
            </div>
            );
    }

  return (
      <CssBaseline>
          <Container maxWidth="md" style={{ height: '100vh' }}>
              <Paper elevation={1} className={classes.paper} style={{ height: '100%' }}>
                  <Typography variant='h2'>Idioms</Typography>
                  <TextField id='standard-basic' label="Search idiom's title, meaning or keyword" style={{ width: '100%' }} onChange={handleSearchChange} />
                  <div style={{ width: '100%', textAlign: 'right' }}>
                      <FormControlLabel
                          control={<Switch checked={checked} color="default" onChange={handleChange} />}
                          label='Show A-Z Index'
                      />
                  </div>

                  <Collapse in={checked}>
                      <div style={{ textAlign: 'center' }}>
                          <AlphabetButtons/>
                      </div>
                  </Collapse>

                  <div className={classes.tableContainer}>
                      <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                              <TableRow>
                                  <TableCell>Title</TableCell>
                                  <TableCell>Meaning</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {idioms.map((row) => (
                                  <TableRow key={row.title}>
                                      <TableCell component="th" scope="row">
                                          {row.title}
                                      </TableCell>
                                      <TableCell>{row.meaning}</TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                    </div>
              </Paper>
          </Container>
      </CssBaseline>
  );
}

export default App;
