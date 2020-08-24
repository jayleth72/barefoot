import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Program from "./Program"
import Title from "../Title"

export default class ProgramList extends Component {
    state = {
        programs: [],
        sortedPrograms: [],
    }

    componentDidMount() {
        this.setState({
            programs: this.props.programs.edges,
            sortedPrograms: this.props.programs.edges,
        })
    }

    render() {
        return (
            <section className={styles.clients}>
                <Title title="Barefoot" subtitle="Programs" />
                <div className={styles.center}>
                    {
                        this.state.sortedPrograms.map(({ node }) => {
                            return <Program key={node.contentful_id} program={node} />
                        })
                    }
                </div>
            </section>
        )
    }
}