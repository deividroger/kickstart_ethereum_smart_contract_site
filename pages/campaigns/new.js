import React, { Component } from 'react'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {  Router} from '../../routes'

class CampaignNew extends Component {

    componentDidMount() {
        window.ethereum.enable();
    }

    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {

        event.preventDefault();
        this.setState({loading:true})
        this.setState({errorMessage:''})

        try {
            const accounts = await web3.eth.getAccounts();
                console.log('aqui' + process.env.CONTRACT_FACTORY);
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });

            Router.pushRoute('/');
            
        } catch (error) {
            this.setState({ errorMessage: error.message })
        }
        this.setState({loading:false})
    }

    render() {
        return (
            <Layout>

                <h3>Create a Campaign</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

                    <Message error header='Oops !' content={this.state.errorMessage} />

                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input label='wei'
                            labelPosition='right'
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>

                    <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
        )
    }
}

export default CampaignNew;