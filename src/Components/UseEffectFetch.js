import React ,{useEffect,useState}from "react";

function UseEffectFetch() {

    const [User, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
             setUsers(await response.json());
        } catch (error) {
           
            console.log("my error is "+ error);
        }

    }
	

    useEffect(() => {
        getUsers();
    }, []);

	return (
		<>
			<h2>List of GitHub Users</h2>
			<div className="container-fluid mt-5">
				<div className="row text-center">

                {
                    User.map((element)=>{
					
                        return(
                        <div className="col-10 col-md-4 mt-5" key={element.id}>
						<div className="card p-2">
							<div className="d-flex align-items-center">
								<div className="image">
									<img className="rounded" src={element.avatar_url} width="155" alt="USER PIC" />
								</div>
								<div className="ml-3 w-100">
									<h4 className="mb-0 mt-0 textLeft">{element.login}</h4>
									
									<div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
										<div className="d-flex flex-column">
											<span className="articles">Articles</span>
											<span className="number1">38</span>
										</div>
										<div className="d-flex flex-column">
											<span className="articles">Followers</span>
											<span className="number1">{Math.floor(Math.random()*100)+1}</span>
										</div>

										<div className="d-flex flex-column">
											<span className="rating">Rating</span>
											<span className="number3">{Math.floor(Math.random()*10)+Math.floor(Math.random()+1)}</span>
										</div>
									</div>
								</div>
							</div>
						</div>      
					</div>
                        )
                    })
                }
					



                    
				</div>
			</div>
		</>
	);
}

export default UseEffectFetch;
