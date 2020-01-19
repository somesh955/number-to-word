import React, { Component } from 'react';
import PropTypes from 'prop-types';
//  MUI
import Paper from '@material-ui/core/Paper';
import { Typography, Box, TextField, Button, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
//  Utility
import { ConverterUtil } from '../utils/converter.utils';

const styles = {
    wrapper: {
        margin: '100px auto',
        padding: 40,
        width: 300,
    },
    form: {
        marginBottom: 20
    },
    inputText: {
        margin: "20px 0"
    },
    button: {
        float: 'right',
    },
    resultBox: {
        paddingTop: 40,
    },
    result: {

    }
};

class NumberToWord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: '',
            word: '',
            error: null,
            loading: false
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(event) {
        const number = event.target.value;
        this.setState({ error: null });
        this.setState({ number });
    }

    handleOnSubmit(event) {
        event.preventDefault();
        if(!this.state.number){
            this.setState({error: "Please enter the number."})
        }else if(this.state.number < 1 || this.state.number > 999999){
            this.setState({error: "Invalid entry, Number should be between 1 to 999999."})
        } else {
            const result = ConverterUtil.getWordFromNumber(this.state.number);
            this.setState(result);
        }
    }

    render() {

        const { classes } = this.props;
        const { loading, error, word } = this.state;

        return (
            <Paper elevation={3} className={classes.wrapper} data-test="test-wrapper">
                <Typography component="h2" varient="h2" color="primary">Number to Word Converter</Typography>
                <Box varient="div">
                    <form name="conveter"
                        data-test="test-form"
                        className={classes.form}
                        onSubmit={this.handleOnSubmit}
                        autoComplete="off">
                        <TextField fullWidth
                            data-test="test-input-number"
                            className={classes.inputText}
                            label="Enter the number"
                            name="number"
                            helperText={error}
                            error={error ? true : false}
                            onChange={this.handleOnChange}
                        />
                        <Button
                            data-test="test-convert-button"
                            size="large"
                            className={classes.button}
                            type="submit"
                            variant="contained"
                            color="primary">Convert {loading && (<CircularProgress className={classes.progress} color="secondary" />)}</Button>
                    </form>
                </Box>
                <Box varient="div" className={classes.resultBox} data-test="test-result">
                    <Typography component="span" varient="span" color="primary">Result: </Typography>
                    <Typography component="span" varient="span" className={classes.result}>{word}</Typography>
                </Box>
            </Paper>
        );
    }
}

NumberToWord.propTypes = {
    number: PropTypes.string,
    word: PropTypes.string,
    error: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NumberToWord);
