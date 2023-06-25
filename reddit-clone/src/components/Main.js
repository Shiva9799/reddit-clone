import React from 'react';
import './css/global.css';
// import { Data } from './components/Data.js';

function MainContent() {
    // console.log(Data)
    return (
        <main className="page-content">
            <div className="posts-list">
                <div className="box filter-list">
                    <div class="filter">
                        <i class="fas fa-fire"></i>
                        <p>Hot</p>
                    </div>
                    <div class="filter">
                        <form>
                            <select name="cars" id="cars">
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="Japan">Japan</option>
                                <option value="Russia">Russia</option>
                            </select>
                        </form>
                    </div>
                    <div class="filter">
                        <i class="fa fa-bullseye"></i>
                        <p>New</p>
                    </div>
                    <div class="filter">
                        <i class='fas fa-award'></i>
                        <p>Top</p>
                    </div>
                </div>
                {/* list of posts */}
                <div className="posts">
                <div class="upvote">
                    <i class='far fa-arrow-alt-circle-up'></i>
                    <p>568</p>
                    <i class='far fa-arrow-alt-circle-down'></i>
                </div>
                <div class="post-content">
                    <div class="username">
                        <a href="#">username</a>
                        <button>Join</button>
                    </div>
                    <div class="post-img">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque hic
                        maxime praesentium
                        quaerat, iure culpa deserunt eos modi ab, quas animi pariatur itaque quidem fugit? Quae maiores
                        corporis incidunt!
                        Sequi vel ad, ut repudiandae magnam numquam aliquid sapiente eveniet necessitatibus excepturi
                        dolore sit, aperiam ullam cumque optio veniam delectus quam iste pariatur reprehenderit
                        distinctio ducimus veritatis iusto! Tenetur, vitae?</div>
                    <div class="post-reach">
                        <a href="#">Comments</a>
                        <a href="#">Share</a>
                        <a href="#">Save</a>
                        <a href="#">More</a>
                    </div>
                </div>{/* ... */}
                </div>
                
                {/* ... */}
            </div>
        </main>
    );
}

export default MainContent;
