import React from 'react';
import $ from 'jquery';

export default class StudentTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			students: []
		};
	}

	componentDidMount() {
		const self = this;
		$.get(this.props.dataSource, function(students) {
			self.setState({
				students: students
			})
		});
	}

	render() {
		const studentRows = this.state.students.map(student => 
			<tr key={student.name}>
			<td>{student.name}</td>
			<td>{student.gender}</td>
			<td>
			<button>删除</button>
			</td>
			</tr>
			);
		return <table>
		<thead>
		<tr>
		<th>姓名</th>
		<th>性别</th>
		<th>操作</th>
		</tr>
		</thead>
		<tbody>
		{studentRows}
		</tbody>
		</table>;
	}
}