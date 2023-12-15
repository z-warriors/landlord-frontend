import { Typography} from '@mui/material';
import { Button } from '.';

export default {
    component: Button
};

export const PrimaryButton = {
    render: () => (
        <>
            <Typography>Primary</Typography>
            <Button variant="contained">Add Landlord</Button>
        </>
    )
};

export const SecondaryButton = {
    render: () => (
        <>
            <Typography>Secondary</Typography>
            <Button variant="text">Add Landlord</Button>
        </>
    )
};


export const ComtainedDisabled = {
    render: () => (
        <>
            <Typography>Secondary</Typography>
            <Button variant="contained" disabled>Add Landlord</Button>
        </>
    )
};
