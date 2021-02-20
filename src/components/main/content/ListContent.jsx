import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import React, { useState } from "react";
import ContentItem from "./ContentItem";

const ListContent = ({ dataTask, onClickedTask, isSearch, dataSearchForm }) => {

    return isSearch ? dataSearchForm.map(item => (
        <Link to="/edit">
            <ContentItem
                key={item.id}
                title={item.title}
                creator={item.creator}
                status={item.status}
                description={item.description}
                clicked={() => onClickedTask(item)}
            />
        </Link>
    )) : dataTask.map(item => (
        <Link to="/edit">
            <ContentItem
                key={item.id}
                title={item.title}
                creator={item.creator}
                status={item.status}
                description={item.description}
                clicked={() => onClickedTask(item)}
            />
        </Link>
    ))
}

const mapStateToProps = state => {
    return {
        dataTask: state.create.DATA,
        dataSearchForm: state.create.dataSearchForm,
        isSearch: state.create.isSearch,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickedTask: (item) => { dispatch({ type: 'CLICK_TASK', value: item }) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListContent);