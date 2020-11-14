import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

export default class NotePage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userData: [],
            notes: [{}],
        }
    }
    addToData(text){
        this.setState({
            notes: [...this.state.notes, {name: text.target.name, value: text.target.value}]
        }, () => console.log(this.state.notes));
    }

    render() {
        return (
            <Card>
                <form noValidate autoComplete="off">
            <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          name="first_ml"
          rowsMax={4}
          value={this.value}
          onChange={(e) => this.addToData(e)}
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          name="multiline_data"
          defaultValue="Default Value"
          onChange={(e) => this.addToData(e)}
        />
        </div>
      </form>
            </Card>
        );
    }
}