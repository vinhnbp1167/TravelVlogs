import React, {useState} from 'react'
import { Typography, Form, Input} from 'antd';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import FileUpload from './FileUpload';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

const { Title } = Typography;
const { TextArea } = Input;

const useStyles = makeStyles({
    root: {
      width: '100%',
      justifyContent: 'space-between',
    },
    toggle: {
      fontFamily: `'Raleway', sans-serif`,
      fontSize: '.8rem',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      borderRadius: '10px',
      '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
        borderRadius: '10px',
      },
      '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
        borderRadius: '10px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
      },
      '&.Mui-selected': {
        borderRadius: '10px',
        background: '#000',
        color: '#fff',
      },
      '&.MuiToggleButton-root': {
        '&:hover': {
          background: '#000',
          color: '#fff',
        },
      },
    },
  });

function WriteReview (props)  {
    const [inputFields, setInputFields] = useState([
      { id: uuidv4(), TitleValue: "", Images: [], DescriptionValue: "" },
    ]);
    const [Images, setImages] = useState([])


    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const handleChangeInput = (id, event) => {
      const newInputFields = inputFields.map(i => {
        if(id === i.id) {
          i[event.currentTarget.name] = event.currentTarget.value
        }
        return i;
      })
      
      setInputFields(newInputFields);
    }

    const handleAddFields = () => {
      setInputFields([...inputFields, { id: uuidv4(),  TitleValue: "", Images: [], DescriptionValue: "" }])
    }
  
    const handleRemoveFields = id => {
      const values  = [...inputFields];
      values.splice(values.findIndex(value => value.id === id), 1);
      setInputFields(values);
    }


    const classes = useStyles();
  return (
     <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Title level={2}>Write Review</Title>
        </div>

        <Form onSubmit>
        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <label>Section Title</label>
            <input
                name='TitleValue'
                onChange={event => handleChangeInput(inputField.id, event)}
                value={inputField.TitleValue}
                class='basic-info-form'
            />

            

            <br />
            <br />
            <label>Section Visual</label>
            <FileUpload 
            name='Images'
            onChange={event => handleChangeInput(inputField.id, event)}
            refreshFunction={updateImages}
            value={inputField.Images} />

            <br />
            <br />
            <label>Section Description</label>
            <TextArea
              name='DescriptionValue'
              style={{ height: '100px'}}
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.DescriptionValue}
            />

            <br />
            <br />
            
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>

            <IconButton onClick={handleAddFields}>
              <AddIcon />
            </IconButton>
          </div>
        ))}

            <ToggleButtonGroup className={classes.root} style={{ flexDirection: 'row-reverse'}}>
                <ToggleButton className={classes.toggle}>
                    Submit
                </ToggleButton>
            </ToggleButtonGroup>
        </Form>
    </div>
  )
}

export default WriteReview
