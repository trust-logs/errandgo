export type User={id:string;firstName:string;lastName:string;email:string;phone:string;country:string;role:'customer'|'tasker'|'both'};
export type Task={id:string;title:string;category:string;location:string;price:number;currency:string;status:'open'|'assigned'|'completed';ownerId:string|null;taskerId:string|null;createdAt:string};
export type Transaction={id:string;type:'deposit'|'payment'|'earning'|'withdrawal';amount:number;currency:string;description:string;createdAt:string};
const key='errandgo-state-v1';
const seed:Task[]=[{id:'1',title:'Pick up groceries and deliver them',category:'Shopping',location:'Wuse, Abuja',price:8500,currency:'NGN',status:'open',ownerId:null,taskerId:null,createdAt:new Date().toISOString()},{id:'2',title:'Clean a 2-bedroom apartment',category:'House Chores',location:'Maitama, Abuja',price:30000,currency:'NGN',status:'open',ownerId:null,taskerId:null,createdAt:new Date().toISOString()},{id:'3',title:'Deliver documents to an office',category:'Run an Errand',location:'Central Area, Abuja',price:7000,currency:'NGN',status:'open',ownerId:null,taskerId:null,createdAt:new Date().toISOString()}];
export type State={users:User[];currentUserId:string|null;tasks:Task[];transactions:Transaction[];messages:{id:string;from:string;to:string;text:string;createdAt:string}[]};
export const initialState:State={users:[],currentUserId:null,tasks:seed,transactions:[],messages:[]};
export function loadState():State{try{const raw=localStorage.getItem(key);if(raw)return JSON.parse(raw)}catch{}return initialState}
export function saveState(s:State){localStorage.setItem(key,JSON.stringify(s))}
export function makeId(){return crypto.randomUUID?.()??`${Date.now()}-${Math.random()}`}
