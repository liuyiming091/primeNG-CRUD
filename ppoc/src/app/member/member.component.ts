import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { DataService } from '../data.service';
import { MemberdataService } from '../memberdata.service';
import { RouterModule,Router } from '@angular/router'
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  newMember= new Member;
  members: Member[];
  memberCols : any[];
  displayDialog: boolean;
  displayEdit: boolean;
  editMember=new Member;
  selectedMember: Member;
  private router: Router;
  constructor(private memberdataService: MemberdataService) {
    this.memberCols = [
      { field: 'id', header: 'Member ID' },
      { field: 'suffix', header: 'Member Suffix' },
      { field: 'firstName', header: 'First Name' },
      { field: 'middleName', header: 'Middle Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'dob', header: 'DOB' },
      { field: 'ssn', header: 'SSN' },
      { field: 'medicaidNumber', header: 'Medicaid Number', width: '250px' },
      { field: 'groupNumber', header: 'Group Number', width: '250px' },
      { field: 'groupName', header: 'Group Name', width: '250px' },
      { field: 'Edit', header: 'Edit', operate: true },
    ];
   }

  getMembers(){
    this.memberdataService.getMembers().then(members => this.members=members);
  }
  ngOnInit():void{
    this.getMembers();
  }

  showDialogToAdd(){
    this.newMember=new Member;
    this.displayDialog=true;
  }

  showDetail(){
    this.displayEdit=true;
  }

  private save(): void {
    this.memberdataService.create(this.newMember);
    this.getMembers();
    this.displayDialog=false;
  }

  private saveEdit(): void {
    console.log(this.selectedMember.id);
    this.memberdataService.edit(this.selectedMember);
    this.displayEdit=false;
  }

  private delete():void{
    this.memberdataService.delete(this.selectedMember.id);
    this.displayEdit=false;
  }

}
