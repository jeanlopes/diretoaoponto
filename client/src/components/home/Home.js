import React from 'react';
import { Grid } from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Print';
import EmployeeIcon from '@material-ui/icons/People';
import WorkloadIcon from '@material-ui/icons/DateRange';
import PointIcon from '@material-ui/icons/HowToVote';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import FileDialog from '../importar/FileDialog';

const Home = () => {

    return (
    <Router>
        <Grid container spacing={24}>
          <Grid xs={12} sm={3} item>
            <FileDialog />
          </Grid>

          <Grid xs={12} sm={3} item>
            <Link className="dpLink" to="/pontos">
              <Paper>
                <PointIcon style={{ fontSize: 50 }} />
                <Typography variant="h6">Pontos</Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid xs={12} sm={3} item>
            <Link className="dpLink" to="/funcionarios">
              <Paper>
                <EmployeeIcon style={{ fontSize: 50 }} />
                <Typography variant="h6">Funcionários</Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid xs={12} sm={3} item>
            <Link className="dpLink" to="/cargaHoraria">
              <Paper>
                <WorkloadIcon style={{ fontSize: 50 }} />
                <Typography variant="h6">Carga Horária</Typography>
              </Paper>
            </Link>
          </Grid>

          <Grid xs={12} sm={3} item>
            <Link className="dpLink" to="/relatorios">
              <Paper>
                <ReportIcon style={{ fontSize: 50 }} />
                <Typography variant="h6">Relatórios</Typography>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Router>
    )
}

export default Home;