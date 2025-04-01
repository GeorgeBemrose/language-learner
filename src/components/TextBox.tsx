import { TextField } from "@mui/material"

interface TextBoxProps {
    label?: string;
}

export default function TextBox({ label = "" }: TextBoxProps){
    return(
        <TextField
          id="outlined-multiline-static"
          label={label}
          multiline
          rows={4}
          defaultValue="Default Value"
        />
    )
}