import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service'; // Import the PackageService
import { ToastrService } from 'ngx-toastr'; // Import Toastr for notifications
import { Router } from '@angular/router';  // <-- Import Router

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css']
})
export class PackListComponent implements OnInit {
  packages: any[] = []; // Array to hold the list of packages
  newPack: any = { /* initialize with the necessary fields, e.g., name, type, etc. */ };

  constructor(private packageService: PackageService, private toastr: ToastrService,private router: Router ) { }

  ngOnInit(): void {
    this.fetchPackages(); // Call method to fetch packages on initialization
  }

  // Fetch all packages from the service
  fetchPackages(): void {
    this.packageService.getAllPackages().subscribe(
      (data: any[]) => {
        this.packages = data; // Assign fetched data to the packages array
      },
      (error) => {
        console.error('Error fetching packages:', error); // Log error in case of failure
        this.toastr.error('Failed to load packages'); // Show error notification
      }
    );
  }
  ajouterVelo(): void {
    this.packageService.addPack(this.newPack).subscribe(
      (response) => {
        this.toastr.success('package added successfully!');
        this.fetchPackages(); // Refresh list after adding
        this.newPack = {}; // Reset form fields
      },
      (error) => {
        console.error('Error adding package:', error);
        this.toastr.error('Failed to add package');
      }
    );
  }
  supprimerPackage(id: number): void {
    if (confirm('Are you sure you want to delete this package?')) {
      this.packageService.deletePack(id).subscribe(
        () => {
          this.toastr.success('pack deleted successfully!');
          this.fetchPackages(); // Refresh list after deleting
        },
        (error) => {
          console.error('Error deleting velo:', error);
          this.toastr.error('Failed to delete velo');
        }
      );
    }
  }
  editVelo(velo: any): void {
    this.router.navigate(['/modifierVelo', velo.id]);
  }
}