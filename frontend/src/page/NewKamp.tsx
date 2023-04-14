import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Stack, Button, TextField } from '@mui/material'

export default function NewKamp() {
  type Schema = {
    a: string
    b: string
  }

  const form = useForm<Schema>({ defaultValues: { a: '', b: '' } })

  const submit = (schema: Schema) => {
    console.log(schema)
  }

  return (
    <>
      <h1>New Kamp</h1>
      <form onSubmit={form.handleSubmit(submit)}>
        <Stack spacing={2} justifyContent="flex-start" alignItems="flex-start">
          <Controller
            name="a"
            control={form.control}
            render={({ field }) => <TextField fullWidth label="A" {...field} />}
          />

          <Controller
            name="b"
            control={form.control}
            rules={{ required: 'required' }}
            render={({ field, fieldState }) => (
              <TextField
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                label="B"
                {...field}
              />
            )}
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </form>
      <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
    </>
  )
}
