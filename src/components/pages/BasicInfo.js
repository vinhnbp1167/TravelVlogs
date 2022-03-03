import React, {useState} from 'react'
import { Typography, Form, Input } from 'antd';
import './BasicInfo.css'
import { makeStyles } from '@material-ui/core/styles';
import FileUpload from './FileUpload';

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

const Continents = [
    { key: 1, value: "" },
    { key: 2, value: "Africa" },
    { key: 3, value: "Antarctica" },
    { key: 4, value: "Asia" },
    { key: 5, value: "Australia" },
    { key: 6, value: "Europe" },
    { key: 7, value: "North America" },
    { key: 8, value: "South America" }
]

function BasicInfo (props) {

    const [TitleValue, setTitleValue] = useState("")
    const [CountryValue, setCountryValue] = useState("")
    const [PriceValue, setPriceValue] = useState()
    const [ContinentValue, setContinentValue] = useState(1)
    const [Images, setImages] = useState([])

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onCountryChange = (event) => {
        setCountryValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !CountryValue || !PriceValue ||
            !ContinentValue || !Images) {
            return alert('Fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            country: CountryValue,
            price: PriceValue,
            images: Images,
            continents: ContinentValue,
        }
    }

    const classes = useStyles();

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Title level={2}> Provide The Required Infos</Title>
        </div>

        <Form onSubmit>

                {/* DropZone */}
                <label>Thumbnail</label>
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <input
                    maxLength="35"
                    onChange={onTitleChange}
                    value={TitleValue}
                    class='basic-info-form'
                />
                <br />
                <br />
                <label>Country</label>
                <input
                    maxLength="35"
                    onChange={onCountryChange}
                    value={CountryValue}
                    class='basic-info-form'
                />
                <br />
                <br />
                <label>Total Cost($)</label>
                <input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                    class='basic-info-form'
                />
                <br /><br />
                <label>Continent</label>
                <select className='select-continent' onChange={onContinentsSelectChange} value={ContinentValue}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>

            </Form>
    </div>
  
)
  }

export default BasicInfo
