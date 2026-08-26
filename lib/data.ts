import { asset } from "./basePath";

export const profile = {
  name: "Carlos Cerezo",
  title: "Network Security Engineer",
  location: "Madrid, Spain",
  email: "b.cerezo.carlos@gmail.com",
  linkedin: "https://www.linkedin.com/in/carloscerezobernal/",
  github: "https://github.com/cerezo83",
  yearsExperience: 12,
  tagline:
    "Securing critical infrastructure for over a decade. Now engineering the next decade of security work with AI.",
  summary: [
    "Carlos has spent more than a decade in the trenches of network and security engineering — from tier-1 technical support to running point on the Security Operations Center of Bolsas y Mercados Españoles, the operator behind every stock market transaction in Spain.",
    "Across firewalls, proxies, IPS, load balancers and SIEM stacks from Palo Alto, Fortinet, Check Point, Cisco and F5, he has hardened, monitored and troubleshot the infrastructure that financial and enterprise environments can't afford to have go down.",
    "Today he pairs that hands-on security depth with AI-assisted engineering — using Claude and Claude Code to automate triage, accelerate infrastructure reviews, and ship cloud and security projects faster, without cutting corners.",
  ],
};

export type ToolCategory = {
  category: string;
  tools: string[];
};

export const toolsUsed: ToolCategory[] = [
  { category: "Firewall", tools: ["Palo Alto", "Check Point", "Fortinet", "Cisco ASA / Firepower", "SonicWall"] },
  { category: "Proxy & Web Security", tools: ["Blue Coat", "Forcepoint", "Cisco IronPort"] },
  { category: "Email Security", tools: ["Cisco ESA", "Barracuda"] },
  { category: "IPS / IDS", tools: ["TippingPoint", "Fortinet", "Check Point"] },
  { category: "Load Balancing", tools: ["F5 LTM", "F5 APM"] },
  { category: "NAC & Vulnerability Mgmt", tools: ["Cisco ISE", "Tenable Nessus"] },
  { category: "Monitoring & Observability", tools: ["Kibana", "Grafana", "FortiAnalyzer", "Prometheus", "Loki"] },
  { category: "Network", tools: ["Cisco", "Force10", "Brocade", "Infoblox"] },
  { category: "Systems", tools: ["Linux Server", "VMware", "Kaspersky"] },
];

export type SkillGroup = {
  title: string;
  blurb: string;
  level: number; // 0-100, relative proficiency for the visual bars
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Network & Perimeter Security",
    blurb: "12+ years hardening the edge — firewalls, proxies, IPS and NAC in production financial environments.",
    level: 96,
    skills: ["Palo Alto", "Fortinet", "Check Point", "Cisco ASA/ISE", "F5 LTM/APM", "TippingPoint", "Blue Coat / Forcepoint"],
  },
  {
    title: "Security Operations (SOC)",
    blurb: "Alert triage, correlation, incident response and vulnerability management at enterprise scale.",
    level: 94,
    skills: ["SIEM & Log Correlation", "Incident Response", "Vulnerability Management (Nessus)", "Threat Monitoring", "Anti-Spam / Mail Security"],
  },
  {
    title: "Cloud & Infrastructure",
    blurb: "Self-driven AWS practice — architecting, containerizing and securing cloud-native environments.",
    level: 85,
    skills: ["AWS (IAM, VPC, ECS, Lambda, RDS)", "Docker & Kubernetes", "Terraform", "CI/CD", "Multi-account Governance"],
  },
  {
    title: "Observability & Monitoring",
    blurb: "Turning raw logs and metrics into signal — dashboards that security and ops teams actually use.",
    level: 88,
    skills: ["Grafana", "Prometheus", "Kibana", "Loki", "FortiAnalyzer"],
  },
  {
    title: "AI-Assisted Engineering",
    blurb: "Using Claude and Claude Code to compress the distance between a security idea and a shipped fix.",
    level: 90,
    skills: ["Claude & Claude Code", "Agentic Workflows", "AI-assisted IaC Review", "Automation & Scripting", "Prompt-driven Documentation"],
  },
  {
    title: "Systems & Programming",
    blurb: "Comfortable close to the metal — Linux administration and low-level programming fundamentals.",
    level: 80,
    skills: ["Linux Server Administration", "C Programming", "VMware", "Networking Fundamentals"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  start: string;
  end: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  tools: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "BME | Bolsas y Mercados Españoles",
    role: "Network Security Engineer",
    start: "Jan 2023",
    end: "Present",
    duration: "3 yr 8 mo",
    location: "Madrid, Spain",
    description:
      "Continuing to safeguard the infrastructure and data systems behind Spain's stock markets and financial systems, with a focus on network security architecture and operations.",
    highlights: [
      "Owns network security design and hardening for BME's critical trading infrastructure",
      "Drives incident response and remediation across firewall, proxy and IPS layers",
      "Evaluates and integrates AI-assisted tooling into daily security workflows",
    ],
    tools: ["Palo Alto", "Fortinet", "Cisco ASA", "Grafana"],
  },
  {
    company: "BME | Bolsas y Mercados Españoles",
    role: "Senior Engineer — Security Operations Center (SOC)",
    start: "Jan 2018",
    end: "Jan 2023",
    duration: "5 yr 1 mo",
    location: "Madrid, Spain",
    description:
      "Member of BME's SOC team, responsible for safeguarding infrastructure and data systems and preserving the security of customer information for the operator of all stock markets and financial systems in Spain.",
    highlights: [
      "Operated and tuned ASA, Palo Alto and Fortigate firewalls protecting trading infrastructure",
      "Administered Cisco ISE NAC for network access control across the estate",
      "Ran vulnerability management with Nessus and anti-spam defenses with Cisco ESA",
      "Built visibility with Kibana, Grafana and FortiAnalyzer monitoring",
    ],
    tools: ["ASA", "Palo Alto", "Fortigate", "Cisco ISE", "Nessus", "Cisco ESA", "Kibana", "Grafana", "FortiAnalyzer"],
  },
  {
    company: "Satec",
    role: "Perimeter Security Support — Level 3 Technician",
    start: "Jan 2017",
    end: "Jan 2018",
    duration: "1 yr 1 mo",
    location: "Madrid, Spain",
    description:
      "Provided support, incident resolution and administration of perimeter security systems across the company's client base.",
    highlights: [
      "Managed F5 LTM/APM load balancing deployments",
      "Administered Fortinet, Palo Alto and Cisco ASA firewalls for multiple clients",
      "Supported Cisco IronPort proxy and secure mail gateways",
    ],
    tools: ["F5 LTM/APM", "Fortinet", "Palo Alto", "Cisco ASA", "Cisco IronPort"],
  },
  {
    company: "Antea Consulting",
    role: "Network and Security Engineer",
    start: "Jan 2016",
    end: "Jan 2017",
    duration: "1 yr 1 mo",
    location: "Las Rozas de Madrid, Spain",
    description:
      "Security and network administrator responsible for deployment and migration of security solutions across different client environments.",
    highlights: [
      "Deployed and migrated security solutions across heterogeneous environments",
      "Provided ongoing security support, administration, operation and troubleshooting",
    ],
    tools: ["Firewalls", "Network Security", "Linux"],
  },
  {
    company: "Telefónica Global Solutions",
    role: "Network and Security Technical Support — 2nd Tier",
    start: "Nov 2014",
    end: "Jan 2016",
    duration: "1 yr 3 mo",
    location: "Madrid, Spain",
    description:
      "Optimized, diagnosed and resolved issues on network infrastructure deployed across large datacenters, supporting a broad vendor product line.",
    highlights: [
      "Supported Infoblox, Blue Coat, F5, Check Point (Stingray), Fortinet, Cisco, Force10 and Brocade",
      "Authored knowledge and support articles to raise customer and peer product knowledge",
    ],
    tools: ["Infoblox", "Blue Coat", "F5", "Check Point", "Fortinet", "Cisco", "Force10", "Brocade"],
  },
  {
    company: "Afina, a Westcon Group company",
    role: "Security Technical Support — Tier 1.5 / Customer Support Engineer",
    start: "Nov 2013",
    end: "Nov 2014",
    duration: "1 yr 1 mo",
    location: "Madrid, Spain",
    description:
      "Monitored, optimized and tuned customer infrastructure while providing remote troubleshooting across a broad security product line.",
    highlights: [
      "Supported TippingPoint, Blue Coat, F5, Check Point, Fortinet, VMware and Linux Server",
      "Communicated with customers on current and future application requirements",
      "Authored knowledge and support articles to raise customer and peer product knowledge",
    ],
    tools: ["TippingPoint", "Blue Coat", "F5", "Check Point", "Fortinet", "VMware", "Linux Server"],
  },
];

export const education = {
  school: "Universidad de Málaga",
  degree: "Ingeniero Técnico de Telecomunicaciones — Electrical, Electronics and Communications Engineering",
  start: "2011",
  end: "2013",
};

export const certifications = [
  {
    name: "Systems Engineer Level 1",
    issuer: "Vendor Certification",
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: "Cloud & Infrastructure" | "Security & Monitoring" | "AI & Automation";
  github: string;
  demo: string;
};

const withBasePath = (path: string) => asset(path);

export const projects: Project[] = [
  {
    id: "ai-multi-agent-portfolio",
    title: "This Portfolio — Built with an AI Agent Workflow",
    description:
      "This very site: researched, designed, written, built and QA'd through a structured Claude Code multi-agent workflow.",
    fullDescription:
      "Rather than hand-write every section, this portfolio was produced through a structured AI-assisted workflow: a research pass grounded the content in real career facts, a design pass defined the cybersecurity visual system, a writing pass drafted section copy, a development pass implemented it in Next.js, Tailwind and Framer Motion, and a QA pass checked builds, accessibility and responsiveness before shipping. It's a working example of the AI-augmented engineering approach described in the AI Workflow section below.",
    image: withBasePath("/images/projects/ai-agent-pipeline.svg"),
    technologies: ["Claude Code", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "AI & Automation",
    github: "https://github.com/cerezo83/portfolio",
    demo: "https://cerezo83.github.io/portfolio/",
  },
  {
    id: "aws-multi-account",
    title: "Multi-Account Governance on AWS",
    description: "Multi-account architecture with AWS Organizations for centralized billing, security and access control.",
    fullDescription:
      "A multi-account architecture built on AWS Organizations, designed to separate environments, control billing, and apply centralized security and access policies across accounts — the same governance mindset applied to enterprise perimeter security, translated to the cloud.",
    image: withBasePath("/images/projects/aws-organizations.jpg"),
    technologies: ["AWS Organizations", "IAM", "CloudTrail", "AWS Config"],
    category: "Cloud & Infrastructure",
    github: "#",
    demo: "#",
  },
  {
    id: "ecs-microservices",
    title: "Container Orchestration on Amazon ECS",
    description: "Scalable, containerized microservices architecture with load balancing and full observability.",
    fullDescription:
      "A scalable deployment of containerized services on Amazon ECS behind an Application Load Balancer, split across private and public subnets, with monitoring wired up through Amazon CloudWatch.",
    image: withBasePath("/images/projects/ecs-architecture.jpg"),
    technologies: ["Amazon ECS", "CloudWatch", "Amazon ECR", "Amazon VPC", "ALB", "NAT Gateway"],
    category: "Cloud & Infrastructure",
    github: "#",
    demo: "#",
  },
  {
    id: "kubernetes-aws",
    title: "Kubernetes-Orchestrated Distributed App",
    description: "Multi-service application on Kubernetes with CI/CD and a polyglot backend.",
    fullDescription:
      "A distributed application running on a Kubernetes cluster with multiple containerized backend APIs, a MongoDB data layer, and AWS services wired in for mail delivery — built to exercise real CI/CD and orchestration patterns.",
    image: withBasePath("/images/projects/kubernetes-aws.jpg"),
    technologies: ["Angular", "Docker", "Amazon ECR", "MongoDB", "Amazon SES", "Minikube"],
    category: "Cloud & Infrastructure",
    github: "#",
    demo: "#",
  },
  {
    id: "iot-location-tracking",
    title: "Real-Time IoT Location Tracking",
    description: "Serverless, real-time location tracking pipeline built on AWS IoT and event-driven services.",
    fullDescription:
      "A real-time tracking system built on AWS IoT Core with Lambda, DynamoDB and EventBridge processing device events, authenticated through Cognito and streamed to clients over WebSocket, visualized with Amazon Location Service.",
    image: withBasePath("/images/projects/iot-location-tracking.jpg"),
    technologies: ["AWS IoT Core", "Location Service", "Lambda", "Cognito", "WebSocket", "EventBridge", "DynamoDB"],
    category: "Cloud & Infrastructure",
    github: "#",
    demo: "#",
  },
  {
    id: "ec2-rds-migration",
    title: "Database Migration: EC2 to Amazon RDS",
    description: "Zero-drama migration from self-managed EC2 databases to Amazon RDS with pooled, secured access.",
    fullDescription:
      "A migration of a self-managed database on EC2 to Amazon RDS, improving connection efficiency with RDS Proxy while enforcing IAM-based access and private subnet isolation — the kind of hardening work that matters most in production financial-grade environments.",
    image: withBasePath("/images/projects/ec2-to-rds-migration.jpg"),
    technologies: ["EC2", "Amazon RDS", "RDS Proxy", "IAM", "VPC"],
    category: "Cloud & Infrastructure",
    github: "#",
    demo: "#",
  },
  {
    id: "spot-etl",
    title: "Cost-Optimized ETL on Spot Instances",
    description: "Lean ETL pipeline running on EC2 Spot with least-privilege IAM access to S3.",
    fullDescription:
      "An ETL pipeline that ingests, transforms and lands data in Amazon S3 using EC2 Spot instances to cut compute cost, with IAM scoped tightly to what the pipeline actually needs — cost optimization without loosening security posture.",
    image: withBasePath("/images/projects/spot-etl-pipeline.jpg"),
    technologies: ["EC2 Spot", "Amazon S3", "IAM"],
    category: "Cloud & Infrastructure",
    github: "#",
    demo: "#",
  },
  {
    id: "cross-account-lambda",
    title: "Secure Cross-Account Lambda Invocation",
    description: "Trust-boundary-aware Lambda invocation pattern spanning two AWS accounts.",
    fullDescription:
      "A pattern for invoking Lambda functions across two AWS accounts using paired identity (outbound) and resource (inbound) policies to establish least-privilege trust — built for multi-account architectures that centralize processing in a shared account.",
    image: withBasePath("/images/projects/cross-account-lambda.jpg"),
    technologies: ["AWS Lambda", "IAM", "Cross-account Trust", "Resource Policy"],
    category: "Security & Monitoring",
    github: "#",
    demo: "#",
  },
  {
    id: "prometheus-grafana",
    title: "Full-Stack Observability with Prometheus & Grafana",
    description: "Metrics, logs and dashboards unified for real-time, data-driven operational decisions.",
    fullDescription:
      "A complete observability stack combining Prometheus for metrics, Loki for centralized logs, and Grafana for unified dashboards and alerting. Grafana Alloy collects CPU, memory and service-level metrics from Python and C# workloads, with the whole stack shipped via Docker Compose for fast local or dev-environment bring-up.",
    image: withBasePath("/images/projects/prometheus-grafana.jpg"),
    technologies: ["Prometheus", "Grafana", "Loki", "Grafana Alloy", "Docker Compose", "Python", "C#"],
    category: "Security & Monitoring",
    github: "#",
    demo: "#",
  },
  {
    id: "spa-cloudfront",
    title: "Global Static Site Delivery on AWS",
    description: "Angular SPA served securely and globally via S3, CloudFront and ACM.",
    fullDescription:
      "A static Angular single-page application hosted on Amazon S3, distributed globally through CloudFront, secured end-to-end with HTTPS via AWS Certificate Manager, and resolved through Route 53.",
    image: withBasePath("/images/projects/spa-aws-cloudfront.jpg"),
    technologies: ["Amazon S3", "CloudFront", "Route 53", "Certificate Manager"],
    category: "Cloud & Infrastructure",
    github: "#",
    demo: "#",
  },
];

export type AiWorkflowStep = {
  step: string;
  label: string;
  description: string;
};

export const aiWorkflowSteps: AiWorkflowStep[] = [
  {
    step: "01",
    label: "Triage & Correlate",
    description:
      "Feed raw alerts and log excerpts to Claude to cut through noise, correlate related events, and surface the ones that actually warrant escalation.",
  },
  {
    step: "02",
    label: "Investigate with Claude Code",
    description:
      "Point Claude Code at firewall configs, IaC and scripts to trace a finding to its root cause instead of chasing symptoms across a dozen tabs.",
  },
  {
    step: "03",
    label: "Harden & Automate",
    description:
      "Turn a one-off fix into a reusable script or Terraform module, with Claude Code drafting, testing and refining the automation end to end.",
  },
  {
    step: "04",
    label: "Document & Ship",
    description:
      "Generate runbooks, incident summaries and PR descriptions on the spot, so knowledge doesn't stay locked in one engineer's head.",
  },
];

export const aiWorkflowPillars = [
  {
    title: "Faster triage, fewer false alarms",
    description:
      "Using Claude to pre-filter and correlate SOC alerts, so human attention goes to the signal, not the noise.",
  },
  {
    title: "Infrastructure-as-Code reviews",
    description:
      "Running Terraform and config changes past Claude Code for security review before they ever reach a production firewall or cloud account.",
  },
  {
    title: "Multi-agent build pipelines",
    description:
      "Structuring larger builds — like this portfolio — as a pipeline of focused AI passes: research, design, content, implementation, QA.",
  },
  {
    title: "Documentation that keeps up",
    description:
      "Generating and maintaining runbooks and knowledge articles alongside the work itself, instead of as an afterthought.",
  },
];
