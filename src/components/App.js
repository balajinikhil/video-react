import React from 'react'
import Axios from 'axios'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './videoDetail'


class App extends React.Component{

    state = {videos: [], selectedVideo:null}

    onVideoSelect = (term)=>{
        
        
        
        this.setState({selectedVideo:term})
        


    }

    onTermSubmit =async (term)=>{

        let response = await Axios.get('https://www.googleapis.com/youtube/v3/search', {
            params:{
                q:term,
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyCPN04rR-CaNxeTqkDfnzwAJp0cfE1c28k'
            }
        }) 


        this.setState({videos:response.data.items,
                selectedVideo: response.data.items[0] })
    }

    componentDidMount(){
        this.onTermSubmit('React JS')
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default App;