import React, { useEffect, useState } from "react";
import RepositoryItem from "../repository-item";
import * as S from './styled'
import useGithub from "../../hooks/github-hooks";

function Repositories(){

    const {githubState, getUserRepos, getUserStarred} = useGithub();

    const [hasUserForSearch,setHasUserForSearch ] = useState(false);
    
    
    useEffect(() => {
        if(githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearch(githubState.repositories);
            
    },[githubState.user.login])

    return(
        <>
            {hasUserForSearch ? 
                <S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel> 
                        <S.WrapperList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem 
                                    key={item.id}
                                    name={item.name}
                                        linkToRepo={item.html_url}
                                        fullName={item.full_name}
                                /> 
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel> 
                        <S.WrapperList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem 
                                    key={item.id}
                                    name={item.name}
                                        linkToRepo={item.html_url}
                                        fullName={item.full_name}
                                /> 
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>                      
                </S.WrapperTabs>
            :
                <></>
            }
            
        </>
    )
}

export default Repositories