import Style_posts from './Account_style/Posts.module.css'

const Posts = () => {
	return (
		<div className={Style_posts.box}>
			<p className={Style_posts.header}>My posts</p>
			<textarea type="text" className={Style_posts.input}></textarea>
			<button className={Style_posts.add}>send</button>
		</div>
	);
}

export default Posts