import React from 'react'
import { getResumeByID } from './dto'

const RESUME_VIEW = ''
const NAME_FIELD = ''
const RESUME_FIELD = ''
const FIELD_LIST = ''
const FIELD_ITEM = ''
const GROUP_FIELD_LIST = ''

// TODO: ul and li stuff need to change
export const NameField = (props) => {
    return (
        <div className={NAME_FIELD}>
            {props.name}
        </div>
    )
}

const GroupField = (props) => {
    const {values, title} = props
    const content = values.map(item => {
        const {value, type} = item
        switch (type) {
            case 'descriptions':
                return <GroupField values={item.values}/>
            default:
                return (
                    <li >
                        {item.value}
                    </li>
                )
        }
    })

    const titleField = title ? (<div>{title}</div>) : ''

    return (
        <li>
            {titleField}
            <ul className={GROUP_FIELD_LIST}>
                {content}
            </ul>
        </li>
        
    )
}

const FieldItem = (props) => {
    const { type, value, values, title} = props.item
    // render items based on type
    switch (type) {
        case 'project':
        case 'experience':
        case 'skill_list':
            return <GroupField title={title} values={values}/>
        default:
            return (
                <li className={FIELD_ITEM}>
                    {value}
                </li>
            )
    }
  
}

const getTitle = (type) => {
    switch (type) {
        case 'education':
            return "Education"
        case 'contacts':
            return "Contacts"
        case 'experiences':
            return "Experiences"
        case 'projects':
            return "Projects"
        case 'skills':
            return "Skills"
        default:
            return `${type}`
    }
}

const ContentField = (props) => {
    const {values, type} = props.field
    const title = getTitle(type)
    const content = values.map((item, index) => {
        return <FieldItem item={item} />
    })

    return (
        <div className={RESUME_FIELD}>
            <div>
                {title}
            </div>
            <ul className={FIELD_LIST}>
                {content}
            </ul>
        </div>
    )
}

export default (props) => {
    const id = props.id
    const resume = getResumeByID(id)
    const {name, fields} = resume

    const contentFields = fields.map( (field) => {
        return <ContentField field={field}/>
    })
    
    return (
        <div className={RESUME_VIEW}>
            <NameField name={name}/>
            {contentFields}
        </div>
    )
}