import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const Auth = () => {
  const classes = useStyles()
  const isSignUp = false;
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography varaint="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                  <Grid xs={6} md={12}>
                    <TextField name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6} />
                  </Grid>
                  <Grid xs={6} md={12}>
                    <TextField name="lastName" label="Last Name" handleChange={handleChange} autoFocus xs={6} />
                  </Grid>
                </>
              )
            }

          </Grid>
        </form>
      </Paper>

    </Container>
  )
}

export default Auth