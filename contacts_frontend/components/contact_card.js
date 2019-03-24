import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ContactCard = (props) => {
    return (
        <Card style={{width: 275, height: 275, margin: 12}}>
          <CardContent>
            <Typography variant="h6" color="inherit" style={{margin: '6px 0'}}>
                {props.first_name + " " + props.last_name}
            </Typography>
            <Typography style={{position:'relative', top:-9, color: '#757575'}}>
                Phone Number: <span style={{fontWeight: 'bold'}}>{props.phone_number}</span>
            </Typography>
            <Typography style={{position:'relative', top:-9, color: '#757575'}}>
                Email: <span style={{fontWeight: 'bold'}}>{props.email}</span>
            </Typography>
          </CardContent>
        </Card>
    );
}

export default ContactCard;