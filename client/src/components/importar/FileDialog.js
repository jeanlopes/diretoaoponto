import React, {Component} from 'react';
import {Paper, Typography} from 'react-dom';
import {Link} from 'react-router-dom';
import {CloudUploadIcon} from '@material-ui/icons/CloudUpload';
  
class FileDialog extends Component {
    
    componentDidMount(){

        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('multiple', 'multiple');
        return fileSelector;
    }
    
    handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();

    }
    
    render(){
      return (
        <Link className="dpLink" to="/importar">
            <Paper>
                <CloudUploadIcon
                className="dpLink"
                style={{ fontSize: 50 }}
                />
                <Typography variant="h6">Importar</Typography>
            </Paper>
        </Link>
      );
    }
}

export default FileDialog;