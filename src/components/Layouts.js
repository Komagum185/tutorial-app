export default function Layout(){
    return(
        <>
            
            <div class="modal-dialog">
		     <div class="modal-content">
			    <form>
				    <div className="modal-header">						
					    <h4 class="modal-title">Add Employee</h4>
					    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				    </div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Name</label>
						<input type="text" class="form-control" name="username" required />
					</div>
					<div class="form-group">
						<label>Email</label>
						<input type="email" class="form-control" name="email" required />
					</div>				
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" name="submit" data-dismiss="modal" value="Cancel" />
					<input type="submit" class="btn btn-success" value="Add" />
				</div>
			   </form>
		</div>
	</div>

        </>
    )
}