import React, { useState, useEffect } from 'react';
import { Paper, Button, TextField, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ALL_PAGES } from '../data/presentation-pages';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export interface PresentationInterface {
    page: number;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '75vw',
        height: '75vh',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        textAlign: 'left'
    },
    item: {
        flexGrow: 1,
    }
}));

export const Presentation = ({ page: initPage }: PresentationInterface) => {
    const classes = useStyles();
    const [page, setPage] = useState(initPage);
    const [content, setContent] = useState(ALL_PAGES[initPage]);

    useEffect(() => {
        setContent(ALL_PAGES[initPage]);
    }, [page]);

    // handler
    const prev = () => {
        setPage(page => page--);
    };
    const next = () => {
        setPage(page => page++);
    }

    return (
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item className={classes.item}>
                    <Typography variant="h1">{content.title}</Typography>
                </Grid>
            </Grid>
            {content.intro && (
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item className={classes.item}>
                        <p>{content.intro}</p>
                    </Grid>
                </Grid>
            )}
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item className={classes.item}>
                    <ul>
                        {content.points && content.points.map(p => (<li>{p}</li>))}
                    </ul>
                </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item className={classes.item}>
                    <Button color={'secondary'} onClick={prev} disabled={page <= 0}>
                        <NavigateNextIcon />
                    </Button>
                </Grid>
                <Grid item className={classes.item}>
                    <Button color={'primary'} onClick={next} disabled={page >= ALL_PAGES.length -1}>
                        <NavigateBeforeIcon />
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}